-- This is a sample Lua script for player management
RegisterCommand('kick', function(source, args)
    local targetPlayer = args[1]
    DropPlayer(targetPlayer, "You have been kicked from the server")
end, true)
