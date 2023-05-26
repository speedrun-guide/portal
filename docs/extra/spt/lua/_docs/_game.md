## `game.save(name)`

Saves the game with the specified name.

### Parameters
- `name` (string): The name of the save.

### Example
```lua
game.save("MySave")
```

---

## `game.load(name)`

Loads a saved game with the specified name.

### Parameters
- `name` (string): The name of the save to load.

### Example
```lua
game.load("MySave")
```

---

## `game.start_recording(name)`

Starts recording a demo with the specified name.

### Parameters
- `name` (string): The name of the demo.

### Example
```lua
game.start_recording("MyDemo")
```

---

## `game.stop_recording()`

Stops recording the current demo.

### Example
```lua
game.stop_recording()
```

---

## `game.pause()`

Pauses the game.

### Example
```lua
game.pause()
```

---

## `game.unpause()`

Unpauses the game.

### Example
```lua
game.unpause()
```

---

## `game.is_paused()`

Checks if the game is currently paused.

### Returns
- `boolean`: `true` if the game is paused, `false` otherwise.

### Example
```lua
local paused = game.is_paused()
```

---

## `game.get_client_tick()`

Returns the current client tick.

### Returns
- `number`: The current client tick.

### Example
```lua
local clientTick = game.get_client_tick()
```

---

## `game.get_server_tick()`

Returns the current server tick.

### Returns
- `number`: The current server tick.

### Example
```lua
local serverTick = game.get_server_tick()
```

---

## `game.get_directory()`

Returns the game directory.

### Returns
- `string`: The game directory.

### Example
```lua
local directory = game.get_directory()
```

---

## `game.async(callback)`

Launches an asynchronous task that runs the callback in a new thread.

### Parameters
- `callback` (function): The callback function to run asynchronously.

### Returns
- `thread|any`: The thread that is running the callback.

### Example
```lua
local asyncThread = game.async(function()
    -- Perform asynchronous task here
end)
```