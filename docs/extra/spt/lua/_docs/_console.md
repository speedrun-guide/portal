## `console.msg(msg, ...)`

Prints a message to the console.

### Parameters
- `msg` (string): Message to be printed, accepts C++ style string formatting.
- `...` (vararg): Additional arguments for string formatting.

### Overloads
- `console.msg(color_hex, msg, ...)`
    - `color_hex` (number): Hexadecimal color value.
    - `msg` (string): Message to be printed.
    - `...` (vararg): Additional arguments for string formatting.

- `console.msg(color_r, color_g, color_b, msg, ...)`
    - `color_r` (number): Red component of the color (0-255).
    - `color_g` (number): Green component of the color (0-255).
    - `color_b` (number): Blue component of the color (0-255).
    - `msg` (string): Message to be printed.
    - `...` (vararg): Additional arguments for string formatting.

### Example
```lua
console.msg("Hello, %s!", "world") -- Prints: Hello, world!

console.msg(0xFF0000, "Red text") -- Prints: Red text in red color

console.msg(255, 0, 0, "Red text") -- Prints: Red text in red color
```

---

## `console.dev_msg(msg, ...)`

Prints a message to the console, only visible with `developer 1` enabled.

### Parameters
- `msg` (string): Message to be printed.
- `...` (vararg): Additional arguments for string formatting.

### Example
```lua
console.dev_msg("This message is only visible with developer mode enabled.")
```

---

## `console.log(msg, ...)`

Prints a message to the console with `log` functionality.

### Parameters
- `msg` (string): Message to be printed.
- `...` (vararg): Additional arguments for string formatting.

### Example
```lua
console.log("This message is logged to the console.")
```

---

## `console.warning(msg, ...)`

Prints a message to the console as a warning, automatically red.

### Parameters
- `msg` (string): Message to be printed.
- `...` (vararg): Additional arguments for string formatting.

### Example
```lua
console.warning("This is a warning message!")
```

---

## `console.error(msg, ...)`

Closes the game with an error dialogue menu.

### Parameters
- `msg` (string): Message to be displayed in the error dialogue.
- `...` (vararg): Additional arguments for string formatting.

### Warning
This function closes the game with an error dialogue menu.

### Example
```lua
console.error("An error occurred. Game will be closed.")
```

---

## `console.exec(command, ...)`

Executes the command in the console.

### Parameters
- `command` (string): Command to be executed.
- `...` (vararg): Additional arguments for string formatting.

### Example
```lua
console.exec('echo "Hello, world!"') -- Executes the command: echo "Hello, world!"
```

---

## `console.clear()`

Clears the console text.

### Example
```lua
console.clear()
```

---

## `console.var_find(name)`

Finds a ConVar by name and returns a `convar` object.

### Parameters
- `name` (string): ConVar name to find.

### Returns
- `convar` (ConVar object): The found ConVar object.

### Example
```lua
local myConVar = console.var_find("example_convar")
```

---



## `console.close()`

Closes the developer console as if you hit '`', which will unpause the game.

### Example
```lua
console.close()
```

---

## `console.hide()`

Hides the developer console, but keeps VGUI elements alive.

### Example
```lua
console.hide()
```

---

## `console.open()`

Opens the developer console, which also pauses the game.

### Example
```lua
console.open()
```

---

## `console.is_visible()`

Checks whether the console is open.

### Returns
- `boolean`: Whether the console is open.

### Example
```lua
local isVisible = console.is_visible()
```

---

## `convar:get_number()`

Returns the numerical value of the ConVar.

### Returns
- `number`: The numerical value of the ConVar.

### Example
```lua
local value = myConVar:get_number()
```

---

## `convar:get_string()`

Returns the string value of the ConVar.

### Returns
- `string`: The string value of the ConVar.

### Example
```lua
local value = myConVar:get_string()
```

---

## `convar:get_bool()`

Returns the boolean value of the ConVar.

### Returns
- `boolean`: The boolean value of the ConVar.

### Example
```lua
local value = myConVar:get_bool()
```

---

## `convar:set_number(value)`

Sets the numerical value of the ConVar.

### Parameters
- `value` (number): The numerical value to set the ConVar to.

### Example
```lua
myConVar:set_number(42)
```

---

## `convar:set_string(value)`

Sets the string value of the ConVar.

### Parameters
- `value` (string): The string value to set the ConVar to.

### Example
```lua
myConVar:set_string("Hello, world!")
```

---

## `convar:set_bool(value)`

Sets the boolean value of the ConVar.

### Parameters
- `value` (boolean): The boolean value to set the ConVar to.

### Example
```lua
myConVar:set_bool(true)
```