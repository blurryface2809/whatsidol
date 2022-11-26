export const initialMessages = [
    {
        id: `Louis-${Math.ceil(Math.random() * 100000)}`,
        sender: "Louis",
        content: "OIOI",
        createdAt: new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
            ) 
    },
    {
        id: `Me-${Math.ceil(Math.random() * 100000)}`,
        sender: "Me",
        content: "Oioiii",
        createdAt: new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
            ) 
    }
]