-- Admin roles and permissions configuration
local adminRoles = {
    ['superadmin'] = { kick = true, ban = true, mute = true },
    ['admin'] = { kick = true, mute = true, ban = false },
}

-- Function to check if a player has the right permissions
local function hasPermission(player, permission)
    local group = GetPlayerGroup(player)
    return adminRoles[group] and adminRoles[group][permission]
end
