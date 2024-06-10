import React, {useState} from 'react';

const Email = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");

    function discord_message(message, embeds = []) {
        console.log(message)
        console.log(embeds)
        const webHookURL = "https://discord.com/api/webhooks/1247274546206216313/h2Lg9FFMYkaXcRHgN_HL-hzD0Hekl3a8FvDTNUawNjSP8WKb8UwyL3Ys8A5YOp2UpGES"

        let xhr = new XMLHttpRequest();
        xhr.open("POST", webHookURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            'content': message,
            'username':'Get in touch response',
            'embeds': embeds,
            'avatar_url':'https://i.imgur.com/vQb9tdr.png',
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            const message = `New contact form submission:\nName: ${name}\nEmail: ${email}`;
            discord_message(message);
            setName('');
            setEmail('');
        } else {
            alert('Please fill in both name and email fields.');
        }
    };

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-purple-950">
                    <div className="hero-content">

                        <div className="card w-[30rem] border border-gray-300 bg-white">
                            <h1 className="text-2xl font-bold text-center py-3">Get in touch</h1>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                           placeholder="name"
                                           className="input input-bordered"
                                           value={name}
                                           onChange={(e) => setName(e.target.value)}/>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                           placeholder="email"
                                           className="input input-bordered"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#301934] text-white text-xl">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Email;