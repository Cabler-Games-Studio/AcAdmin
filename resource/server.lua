RegisterCommand('adminpanel', function(source, args, rawCommand)
    local xPlayer = GetPlayerPed(source)
    local group = GetPlayerGroup(source)
    
    -- Check if player has admin rights (based on role)
    if group == "admin" or group == "superadmin" then
        TriggerClientEvent('nui:open', source)  -- Open the NUI (admin panel)
    else
        TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', 'Access Denied' } })
    end
end, false)
