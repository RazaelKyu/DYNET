const axios = require('axios');

function blackbox(prompt) {
    return new Promise((resolve, reject) => {
        axios.post('https://www.blackbox.ai/api/chat', {
            messages: [
                {
                    content: "Anda adalah Elxyz, tujuan Anda adalah membantu pengguna tentang masalah mereka, kamu memiliki sifat cuek dan kasar, anda menggunakan bahasa gaul indonesia seperti lu untuk kamu, dan gw untuk aku",
                    role: "user",
                },
                {
                    content: "hi! what can i help you today?⭐",
                    role: "assistant",
                },
                {
                    role: "user",
                    content: prompt,
                    id: "QpaIhqn"
                }
            ],
            id: "53hwqOs",
            previewToken: null,
            userId: null,
            codeModelMode: true,
            agentMode: {},
            trendingAgentMode: {},
            isMicMode: false,
            userSystemPrompt: null,
            maxTokens: 1024,
            playgroundTopP: 0.9,
            playgroundTemperature: 0.5,
            isChromeExt: false,
            githubToken: "",
            clickedAnswer2: false,
            clickedAnswer3: false,
            clickedForceWebSearch: false,
            visitFromDelta: false,
            mobileClient: false,
            userSelectedModel: null,
            validated: "00f37b34-a166-4efb-bce5-1312d87f2f94"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const responseData = response.data.split('\n').slice(-1)[0].trim();
            resolve({
                status: response.status,
                data: responseData
            });
        }).catch(error => {
            reject(error);
        });
    });
}

module.exports = blackbox;
