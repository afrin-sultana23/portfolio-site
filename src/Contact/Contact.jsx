import React, { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    function discord_message(message, embeds = []) {
        console.log(message)
        console.log(embeds)
        const webHookURL = "https://discord.com/api/webhooks/1193243813355995286/RGmayZDkqZk2sgfJhcEl6tAk-DxqIOwrQTry68WpRs13M8wO6euuGf1e7ZHQ-PSlG7cf"

        let xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'Garbage Collector',
            'embeds': embeds,
            'avatar_url':'https://i.imgur.com/vQb9tdr.png',
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            return;
        }

        const discordMessage = `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

        discord_message(discordMessage);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 className="text-4xl font-semibold text-[#6f9efa] mb-4">Contact Me For Colab</h1>
            <form onSubmit={handleSubmit} className="  p-3 py-6 rounded w-full ">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full input mb-4 bg-transparent border border-gray-400 "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full input mb-4 bg-transparent border border-gray-400 "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Message"
                    className="w-full input h-40 mb-4 py-2 bg-transparent border border-gray-400"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="w-full flex justify-end">
                    <button type="submit"
                            className="resume-btn">SEND
                        MESSAGE
                    </button>
                    
                </div>
            </form>
        </div>
    );
};

// Make sure to export the discord_message function from Email.jsx or use context/API calls to access it
export default Contact;
