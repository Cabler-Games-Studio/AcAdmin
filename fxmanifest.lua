fx_version 'cerulean'
game 'gta5'

author 'AcGaming14'
description 'AcAdmin Panel for FiveM'

-- UI Assets
ui_page 'nui/index.html'

files {
    'nui/index.html',
    'nui/styles.css',
    'nui/scripts.js'
}

client_scripts {
    'resource/client.lua'
}

server_scripts {
    'panel/server.ts'  -- Pointing to Deno-based backend
}

shared_script 'resource/config.lua'
