{
    "name": "Amazone Alexa V8",
    "description": "Alexa is a chat bot for WhatsApp. Makes it easy and Working perfectly",
    "logo": "",
    "keywords": ["whatsapp", "userbot", "bot", "api", "ai", "amazone alexa"],
    "repository": "https://chat.whatsapp.com/B5i5mfIerpC6K8jf6GkM7I",
    "website":   "https://chat.whatsapp.com/B5i5mfIerpC6K8jf6GkM7I",
    "success_url": "https://chat.whatsapp.com/B5i5mfIerpC6K8jf6GkM7I",
    "stack": "container",
    "env": {
        "NEUTRO_SESSION": {
            "description": "Paste your QR session.",
            "required": true
        },
        "SUDO": {
            "description": "If you do not know how to use it, leave it blank! SUDO mode; Your number must be an international number. So you have to have your number after the country code. Example: 947xxxxxxxx (Sri lanka No. 94)",
            "required": false
        },
        "LANGUAGE": {
            "description": "Enter your language. SI - Sinhala | EN - English | ES - Spanish(ag)",
            "required": true,
            "value": "SI"
        },
        "AUTO_BIO": {
            "description": "Setup AUTO BIO feature. Adding a live clock for your WhatsApp about.",
            "required": true,
            "value": "false"
        },
        "HANDLERS": {
            "description": "Enter bot prefix to use commands.",
            "required": true,
            "value": "^[.!]"
        },
        "AI_BOT": {
            "description": "To enable / disable the AI chat bot. Use true to enable AI chat bot and false to deactivate AI chat bot.",
            "required": true,
            "value": "true"
        },
        "SEND_READ": {
            "description": "Need to show user whether bot message seen or not?",
            "required": true,
            "value": "true"
        },
        "HEROKU": {
            "description": "Heroku",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "https://dashboard.heroku.com/account Click this link. Scroll down for the API key. Then click the Reveal button. Copy the API key and paste the API Key empty box below.",
            "required": true
        },
        "HEROKU_APP_NAME": {
            "description": "Use the same App name as first.",
            "required": true
        },
        "SONG_TYPE": {
            "description": "Choose your .song file type.(document or audio)",
            "required": true,
            "value": "document"
        },
        "CAPTIONS": {
            "description": "Set your caption under medias.",
            "required": true,
            "value": "Made By 👩‍🦰Amazone Alexa"
        },
        "IMGBB": {
            "description": "Paste your imgbb API to change ALIVE,Welcome,Bye pictures by a command. (Visit https://imgbb.com/ and signup there. And get an API key from https://api.imgbb.com/)",
            "required": false,
            "value": ""
        },
        "MUTE_MESSAGE": {
            "description": "Message received when mute a group. If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "BLOCK_CHAT": {
            "description": "Select the chat where the bot does not work. Ex: 947xxxxxxxx && 947xxxxxxxx හෝ 947xxxxxxxx,947xxxxxxxx",
            "required": false,
            "value": "no chats added"
        },
        "ANTI_BAD": {
            "description": "Activate Anti-Bad word for your groups. (Use true or false)",
            "required": true,
            "value": "false"
        },
        "ANTIBUG": {
            "description": "Activate Anti-Bug sheild for your groups. And protect your groups by bug bots.(Use true or false)",
            "required": true,
            "value": "false"
        },
        "ALIVE_LOGO": {
            "description": "Alive message logo. Enter your image link below to change the image. (Upload the image you want to https://imgbb.com and put that link here.)",
            "required": true,
            "value": ""
        },
        "WELCOME_LOGO": {
            "description": "Welcome message logo. Enter your image link below to change the image. (Upload the image you want to https://imgbb.com and put that link here.)",
            "required": true,
            "value": ""
        },
        "BYE_LOGO": {
            "description": "Good Bye message logo. Enter your image link below to change the image. (Upload the image you want to https://imgbb.com and put that link here.)",
            "required": true,
            "value": ""
        },
        "UNMUTE_MESSAGE": {
            "description": "Message received when unmuteing a group.",
            "required": false,
            "value": "default"
        },
        "BLOCK_MESSAGE": {
            "description": "Modifiable chat block notification. If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "UNBLOCK_MESSAGE": {
            "description": "Modifiable chat unblock notification. If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "WORK_TYPE": {
            "description": "The way the bot works. If you use public, everyone can use the bot. If you use private, only you can use your bot.",
            "required": true,
            "value": "private"
        },       
        "RULES": {
            "description": "You can set rules display to your groups.",
            "required": true,
            "value": "default"
        },
        "EMOJI_COMMAND": {
            "description": "You can change Command list emojis.)",
            "required": true,
            "value": "👸"
        },
        "EMOJI_DESCRIPTION": {
            "description": "You can change command list emojis.)",
            "required": true,
            "value": "💰"
        },
        "EMOJI_WARNING": {
            "description": "You can change command list emojis.)",
            "required": true,
            "value": "🚫"
        },
        "DEBUG": {
            "description": "If you do not know this. Give it up.",
            "required": true,
            "value": "false"
        },
        "PANEL_COMMAND": {
            "description": "Customizeable commands list request command. Keep alexa if you don't want to change.",
            "required": true,
            "value": "alexa"
        },
        "REMOVE_BG_API_KEY": {
            "description": "Here you go to the website remove.bg and sign up and get an API key. Leave the API key in this space.",
            "required": false
        },
        "ALIVE_MESSAGE": {
            "description": "The message you get when you check whether the bot is online or not. This is not necessarily the case.",
            "required": false,
            "value": "default"
        },
        "BAN_MESSAGE": {
            "description": "The message you get when someone commands you as .ban and removes it. If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "ADD_MESSAGE": {
            "description": "If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "KICKME_MESSAGE": {
            "description": "If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "PROMOTE_MESSAGE": {
            "description": "If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "DEMOTE_MESSAGE": {
            "description": "If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "AFK_MESSAGE": {
            "description": "If you do not want to change this message, type default.",
            "required": false,
            "value": "default"
        },
        "NO_ONLINE": {
            "description": "This is not necessarily the case.",
            "required": false,
            "value": "true"
        },
        "COFFEEHOUSE_API_KEY": {
            "description": "Give it up. We give you this.",
            "required": false,
            "value": "true"
        },
        "YT_INFO": {
            "description": "Do you want details of YouTube songs and video? Type 'true' or 'false' (YT Info may be cause song download speed slow)",
            "required": true,
            "value": "true"
        }
    },
    "addons": [{
      "plan": "heroku-postgresql"
    }],
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }
