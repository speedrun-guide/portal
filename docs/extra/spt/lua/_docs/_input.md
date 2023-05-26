## `input_key`

### Description
Represents an input key and provides methods to interact with it.

### Fields
- `cmd` (string): The name of the command for the input.

### Methods
- `input_key:release()`: Releases the input key.
- `input_key:hold(ticks)`: Holds the input key down until it is released. If `ticks` is `nil`, the key will be held down until it is released.
- `input_key:tap()`: Holds the input key down for one tick.

### Example
```lua
local forwardKey = input.forward
forwardKey:hold(10) -- Hold the forward key down for 10 ticks
forwardKey:release() -- Release the forward key
```

---

## `input`

### Description
Provides a table of input keys and methods to interact with them.

### Input Keys
- `forward`: Represents the forward input key.
- `back`: Represents the back input key.
- `moveleft`: Represents the move left input key.
- `moveright`: Represents the move right input key.
- `moveup`: Represents the move up input key.
- `movedown`: Represents the move down input key.
- `left`: Represents the left input key.
- `right`: Represents the right input key.
- `lookup`: Represents the look up input key.
- `lookdown`: Represents the look down input key.
- `jump`: Represents the jump input key.
- `duck`: Represents the duck input key.
- `attack`: Represents the attack input key.
- `attack2`: Represents the secondary attack input key.
- `strafe`: Represents the strafe input key.
- `speed`: Represents the speed input key.
- `walk`: Represents the walk input key.
- `use`: Represents the use input key.
- `klook`: Represents the keyboard look input key.
- `jlook`: Represents the joystick look input key.
- `reload`: Represents the reload input key.
- `alt1`: Represents the alternative 1 input key.
- `alt2`: Represents the alternative 2 input key.
- `score`: Represents the score input key.
- `showscores`: Represents the show scores input key.
- `graph`: Represents the graph input key.
- `zoom`: Represents the zoom input key.
- `grenade1`: Represents the grenade 1 input key.
- `grenade2`: Represents the grenade 2 input key.

### Methods
- `input.reset()`: Resets all input keys to released.
- `input.create(name)`: Creates an `input_key` with the given name. The name is also used as the command for the input.

### Example
```lua
input.forward:tap() -- Tap the forward key
input.reset() -- Reset all input keys to released

local customKey = input.create("custom")
customKey:hold(5) -- Hold the custom key down for 5 ticks
```