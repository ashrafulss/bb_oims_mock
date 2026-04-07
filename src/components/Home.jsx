
import React from "react";
import BBLogo from '../assets/BB_logo1.jpg';
import Navbar from '../components/Navbar';
import NoticeCard from '../components/NoticeCard';
import MenuBar from "./MenuBar";
import { useState, useEffect } from "react";


const menuBarItems = {

    import: [
        { id: "home", label: "Home" },
        { id: "transactions", label: "Transactions" },
        { id: "reports", label: "Reports" },
        { id: "certificate", label: "Certificate" },
        { id: "statement", label: "Statement" },
        { id: "faq", label: "FAQ" },
        { id: "ads-info", label: "AD's Information" },
        { id: "contact", label: "My Contact" },
        { id: "change-password", label: "Change Password" },
    ],


};


export default function Home() {

    const [activeNavbar, setActiveNavbar] = useState("import");
    const [activeMenuBar, setActiveMenuBar] = useState(null);


    const notices = [
        {
            content: "Notice regarding time extension application related to Fire Incident at Hazrat Shahjalal International Airport An interim provision has been introduced regarding time extension for submitting Bill of Entry due to the fire incident at Hazrat Shahjalal International Airport. Detailed procedures are delineated in the letter uploaded in OIMS>Documents>Other documents/Guidelines section for ready reference.",
            link: "/documents/fire-incident-letter.pdf",
        },

    ];

    const navbarItems = [
        { id: "tickets", label: "Tickets" },
        { id: "prc", label: "PRC" },
        { id: "documents", label: "Documents" },
        { id: "notices", label: "Notices" },
        { id: "irc-importers", label: "IRC (Importers)" },
        { id: "master-lc", label: "Master L/C Contract" },
        { id: "local-lc", label: "Local L/C" },
        { id: "import", label: "Import" },
        { id: "comm-invoice", label: "Comm. Invoice" },
    ];


    useEffect(() => {
        if (activeNavbar === "import") {
            setActiveMenuBar(menuBarItems.import[0].id); 
        } else {
            setActiveMenuBar(null);
        }
    }, [activeNavbar]);


    return (
        <div className="flex flex-col items-center overflow-x-hidden">
        
            <div className="flex flex-col items-center ">
                <img src={BBLogo} alt="Bangladesh Bank Logo" className="h-[93px] w-[94px]" />
                <span className="text-green-900 font-bold text-[18px]">Bangladesh Bank</span>
                <span className="text-black font-bold text-[15px]">Online Import Monitoring System</span>
            </div>

            <div className="relative flex overflow-x-hidden w-full  ">
                <div className="flex animate-marquee whitespace-nowrap">

                    {notices.map((notice, idx) => (
                        <NoticeCard key={`orig-${idx}`} content={notice.content} link={notice.link} />
                    ))}

                    {notices.map((notice, idx) => (
                        <NoticeCard key={`dup-${idx}`} content={notice.content} link={notice.link} />
                    ))}

                </div>
            </div>

            <Navbar
                menuItems={navbarItems}
                activeMenu={activeNavbar}
                setActiveMenu={setActiveNavbar}
            />

            <MenuBar
                menuItems={menuBarItems[activeNavbar] || []}
                activeItem={activeMenuBar}
                setActiveItem={setActiveMenuBar}
                key={activeNavbar}
            />

        </div>
    );
}