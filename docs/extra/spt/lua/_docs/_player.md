## `player.get_pos()`

Returns the position of the player.

### Returns
- `vec3` (Player position): The position of the player.

### Example
```lua
local pos = player.get_pos()
```

---

## `player.set_pos(pos)`

Sets the position of the player.

### Parameters
- `pos` (vec3): The position vector to set.

### Example
```lua
player.set_pos(vec3(10, 20, 30))
```

---

## `player.get_ang()`

Returns the viewing angle of the player.

### Returns
- `vec3` (Player viewing angle): The viewing angle of the player.

### Example
```lua
local ang = player.get_ang()
```

---

## `player.set_ang(ang)`

Sets the viewing angle of the player.

### Parameters
- `ang` (vec3|vec2): The angle vector to set. If `ang` is a `vec2`, the current `z` value will be used.

### Example
```lua
player.set_ang(vec3(0, 90, 0))
```

---

## `player.get_local_ang()`

Returns the local viewing angle of the player.

### Returns
- `vec3` (Local viewing angle): The local viewing angle of the player.

### Example
```lua
local localAng = player.get_local_ang()
```

---

## `player.set_local_ang(ang)`

Sets the local viewing angle of the player.

### Parameters
- `ang` (vec3): The local angle vector to set.

### Example
```lua
player.set_local_ang(vec3(0, 90, 0))
```

---

## `player.get_local_ang_offset()`

Returns the local angle offset of the player.

### Returns
- `vec3` (Local angle offset): The local angle offset of the player.

### Example
```lua
local localAngOffset = player.get_local_ang_offset()
```

---

## `player.get_local_pos()`

Returns the local position of the player.

### Returns
- `vec3` (Local position): The local position of the player.

### Example
```lua
local localPos = player.get_local_pos()
```

---

## `player.get_local_pos_offset()`

Returns the local position offset of the player.

### Returns
- `vec3` (Local position offset): The local position offset of the player.

### Example
```lua
local localPosOffset = player.get_local_pos_offset()
```

---

## `player.get_local_pos_origin()`

Returns the local origin position of the player.

### Returns
- `vec3` (Local origin position): The local origin position of the player.

### Example
```lua
local localPosOrigin = player.get_local_pos_origin()
```

---

## `player.get_vel()`

Returns the velocity of the player.

### Returns
- `vec3` (Player velocity): The velocity of the player.

### Example
```lua
local vel = player.get_vel()
```

---

## `player.set_vel(vel)`

Sets the velocity of the player.

### Parameters
- `vel` (vararg vec3): The velocity vector to set.

### Example
```lua
player.set_vel(vec3(0, 0, 10))
```

---

## `player.get_eye_pos()`

Returns the eye position of the player.

### Returns
- `vec3` (Player eye position): The eye position of the player.

### Example
```lua
local eyePos = player.get_eye_pos()
```

---

## `player.teleport(pos, ang, vel)`

Teleports the player to the specified position, sets the viewing angle, and velocity

.

### Parameters
- `pos` (vec3): The position to teleport the player to.
- `ang` (vec3): The viewing angle to set for the player.
- `vel` (vec3): The velocity to set for the player.

### Example
```lua
player.teleport(vec3(100, 200, 300), vec3(0, 90, 0), vec3(0, 0, 10))
```

---

## `player.is_grounded()`

Checks if the player is grounded.

### Returns
- `boolean`: `true` if the player is grounded, `false` otherwise.

### Example
```lua
local grounded = player.is_grounded()
```

---

## `player.trace()`

Performs a trace from the player's view.

### Returns
- `vec3` (Trace result): The traced result of the player's view.

### Example
```lua
local traceResult = player.trace()
```