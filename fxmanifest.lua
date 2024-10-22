fx_version 'cerulean'
game 'gta5'

name 'AcAdmin'
description 'Advanced Admin Panel for FiveM'
author 'AcGaming14'
version '1.0.0'

-- Server-side scripts
server_script 'entrypoint.js'

-- NUI (client UI)
ui_page 'nui/index.html'

files {
    'nui/index.html',
    'nui/styles.css',
    'nui/script.js'
}

-- Client-side scripts
client_script 'resource/client.lua'

-- Additional server-side scripts (if any)
server_script 'resource/server.lua'
