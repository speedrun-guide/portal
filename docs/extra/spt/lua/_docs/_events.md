## `events.tick`

This event is fired every tick. It provides the tick number.

### Event Properties
- `tick` (number): The tick number.

### Example
```lua
events.tick:listen(function(event)
    print("Tick:", event.tick)
end)
```

---

## `events.frame`

This event is fired every frame. It provides the delta time since the last frame.

### Event Properties
- `delta` (number): The delta time since the last frame.

### Example
```lua
events.frame:listen(function(event)
    print("Delta:", event.delta)
end)
```

---

## `events.render`

This event is fired during the rendering phase.

### Example
```lua
events.render:listen(function()
    -- Perform rendering logic here
end)
```

---

## `events.level_init`

This event is fired when the level is initialized. It provides the name of the map.

### Event Properties
- `map_name` (string): The name of the map.

### Example
```lua
events.level_init:listen(function(event)
    print("Map Name:", event.map_name)
end)
```

---

## `events.client_active`

This event is fired when the client becomes active.

### Example
```lua
events.client_active:listen(function()
    print("Client is active")
end)
```

---

## `events.client_disconnect`

This event is fired when the client disconnects.

### Example
```lua
events.client_disconnect:listen(function()
    print("Client disconnected")
end)
```

---

## `events.player_jump`

This event is fired when a player jumps.

### Example
```lua
events.player_jump:listen(function()
    print("Player jumped")
end)
```

---

## `events.entity_teleport`

This event is fired when an entity is teleported. It provides information about the entity and its position before and after the teleport.

### Event Properties
- `entity` (entity): The entity that was teleported.
- `old_pos` (vec3): The position of the entity prior to the teleport.
- `new_pos` (vec3): The position of the entity after the teleport.
- `old_rot` (vec3): The rotation of the entity prior to the teleport.
- `new_rot` (vec3): The rotation of the entity after the teleport.
- `old_ang` (vec3): The angles of the entity prior to the teleport.
- `new_ang` (vec3): The angles of the entity after the teleport.

### Example
```lua
events.entity_teleport:listen(function(event)
    print("Entity Teleported")
    print("Entity:", event.entity:get_id())
    print("Old Position:", event.old_pos)
    print("New Position:", event.new_pos)
    print("Old Rotation:", event.old_rot)
    print("New Rotation:", event.new_rot)
    print("Old Angles:", event.old_ang)
    print("New Angles:", event.new_ang)
end)
```

---

## `events.player_teleport`

This event is fired when a player is teleported. It provides information about the player and their position before and after the teleport.

### Event Properties
- `entity` (entity): The player that was teleported.
- `old_pos` (vec3): The position of the player prior to the teleport.
- `new_pos` (vec3): The position of the player after the teleport.

### Example
```lua
events.player_teleport:listen(function(event)
    print("Player Teleported")
    print("Player:", event.entity:get_id())
    print("Old

 Position:", event.old_pos)
    print("New Position:", event.new_pos)
end)
```

---

## `events.player_grounded`

This event is fired when a player becomes grounded.

### Example
```lua
events.player_grounded:listen(function()
    print("Player grounded")
end)
```

---

## `events.player_ungrounded`

This event is fired when a player becomes ungrounded.

### Example
```lua
events.player_ungrounded:listen(function()
    print("Player ungrounded")
end)
```

---

## `events.entity_touch_trigger`

This event is fired when an entity touches a trigger. It provides information about the trigger and the entity that touched it.

### Event Properties
- `trigger` (entity): The trigger that was touched.
- `entity` (entity): The entity that touched the trigger.

### Example
```lua
events.entity_touch_trigger:listen(function(event)
    print("Entity touched trigger")
    print("Trigger:", event.trigger:get_id())
    print("Entity:", event.entity:get_id())
end)
```

---

## `events.player_touch_trigger`

This event is fired when a player touches a trigger. It provides information about the trigger and the player that touched it.

### Event Properties
- `trigger` (entity): The trigger that was touched.
- `entity` (entity): The player that touched the trigger.

### Example
```lua
events.player_touch_trigger:listen(function(event)
    print("Player touched trigger")
    print("Trigger:", event.trigger:get_id())
    print("Player:", event.entity:get_id())
end)
```

---

## `events.portal_moved`

This event is fired when a portal is moved. It provides information about the portal's position and angles before and after the move.

### Event Properties
- `old_pos` (vec3): The position of the portal prior to the move.
- `new_pos` (vec3): The position of the portal after the move.
- `old_ang` (vec3): The angles of the portal prior to the move.
- `new_ang` (vec3): The angles of the portal after the move.

### Example
```lua
events.portal_moved:listen(function(event)
    print("Portal moved")
    print("Old Position:", event.old_pos)
    print("New Position:", event.new_pos)
    print("Old Angles:", event.old_ang)
    print("New Angles:", event.new_ang)
end)
```

---

## `event_type.call(self, event)`

Calls the listeners for the event.

### Parameters
- `event` (Event): The event to pass to the listeners.

### Example
```lua
events.tick:call({tick = 123})
```

---

## `event_type.next(self, callback)`

Executes the callback when the event is fired next.

### Parameters
- `callback` (function): The callback to call when the event is fired.

### Example
```lua
events.player_jump:next(function()
    print("Player jumped")
end)
```

---

## `event_type.wait(self, count)`

Waits for a specific number of events to be fired.

### Parameters
- `count` (number|nil): The number of events to wait for. If `nil`, it will wait for one event.

### Returns
- The last event that was waited for.

### Example
```lua
game.async(function()
    local event = events.player_jump:wait()
    print("Player jumped")
end)
```

---

## `event_type.listen(self, callback)`

Listens for the event and executes the callback when it is fired.

### Parameters
- `callback

` (function): The callback to call when the event is fired.

### Returns
- `function`: A function that can be called to cancel the listener.

### Example
```lua
local cancel = events.player_jump:listen(function()
    print("Player jumped")
end)

-- Call cancel() to cancel the listener
cancel()
```

