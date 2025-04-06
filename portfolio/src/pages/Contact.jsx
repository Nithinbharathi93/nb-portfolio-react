const ContactPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl text-white font-bold">Wanna contact me?</h1>
            <div className="flex flex-col text-left">
                <a className="dark:md:hover:bg-fuchsia-600" href="https://x.com/NithinbharathiT">Twitter</a>
                <a className="dark:md:hover:bg-fuchsia-600" href="https://www.instagram.com/nithinbharathi.t/">Instagram</a>
                <a className="dark:md:hover:bg-fuchsia-600" href="https://www.linkedin.com/in/nithinbharathi/">LinkedIn</a>
                <a className="dark:md:hover:bg-fuchsia-600" href="https://github.com/Nithinbharathi93">Github</a>
            </div>
        </div>
    )
}

export default ContactPage;