`fs.path:parent_path()`
-------------------------

Returns the string representation of the parent folder's path.

### Returns
- `string`: The string representation of the parent folder's path.

### Examples
```lua
local path = fs.path("/home/user/docs/file.txt")
local parentPath = path:parent_path()
print(parentPath)  -- Output: "/home/user/docs"
```

---

`fs.path:file_name()`
----------------------

Returns the file name.

### Returns
- `string`: The file name.

### Examples
```lua
local path = fs.path("/home/user/docs/file.txt")
local fileName = path:file_name()
print(fileName)  -- Output: "file.txt"
```

---

`fs.path:extension()`
---------------------

Returns the file extension.

### Returns
- `string`: The file extension.

### Examples
```lua
local path = fs.path("/home/user/docs/file.txt")
local extension = path:extension()
print(extension)  -- Output: ".txt"
```

---

`fs.file(path)`
----------------

Opens a file for reading or writing.

### Parameters
- `path` (string or fs.path): The path to the file.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
```

---

`fs.file:is_open()`
-------------------

Checks whether the file is open.

### Returns
- `boolean`: Whether the file is open.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
print(file:is_open())  -- Output: false

file()  -- Open the file
print(file:is_open())  -- Output: true
```

---

`fs.file:close()`
-----------------

Closes the file.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

-- Do some operations with the file

file:close()
```

---

`fs.file:write(str)`
---------------------

Writes a string to the file.

### Parameters
- `str` (string): The string to write to the file.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

file:write("Hello, world!")
```

---

`fs.file:read_line()`
---------------------

Reads the next line of the file.

### Returns
- `string`: The next line of the file.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

local line = file:read_line()
print(line)  -- Output: "Hello, world!"
```

---

`fs.file:read_all()`
--------------------

Reads the entire contents of the file.

### Returns
- `string`: The contents of the file.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

local contents = file:read_all()
print(contents)  -- Output: "Hello, world!"
```

---

`fs.file:read(n)`
-----------------

Reads up to `n` bytes from the file.

### Parameters
- `n` (number): The number of bytes to read.

### Returns
- `string`: The contents of the file read up to `n` bytes.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

local data = file:read(5)
print(data)  -- Output: "Hello"
```

---

`fs.file:eof()`
----------------

Checks whether the file is at the end.

### Returns
- `boolean`: Whether the file is at the

end.

### Examples
```lua
local file = fs.file("/path/to/file.txt")
file()  -- Open the file

print(file:eof())  -- Output: false

-- Read the entire file
local contents = file:read_all()

print(file:eof())  -- Output: true
```

---

`fs.file_size(path)`
---------------------

Returns the size of the file in bytes.

### Parameters
- `path` (fs.path or string): The path to the file.

### Returns
- `number`: The size of the file in bytes.

### Examples
```lua
local size = fs.file_size("/path/to/file.txt")
print(size)  -- Output: 13
```

---

`fs.exists(path)`
-----------------

Checks whether the file exists.

### Parameters
- `path` (fs.path or string): The path to the file.

### Returns
- `boolean`: Whether the file exists.

### Examples
```lua
local exists = fs.exists("/path/to/file.txt")
print(exists)  -- Output: true
```

---

`fs.create_directory(path)`
---------------------------

Creates a directory with the specified path.

### Parameters
- `path` (fs.path or string): The path of the directory to create.

### Examples
```lua
fs.create_directory("/path/to/new_directory")
```

---

`fs.rename(old_path, new_path)`
-------------------------------

Renames a file or directory.

### Parameters
- `old_path` (fs.path or string): The path of the file or directory to rename.
- `new_path` (fs.path or string): The new path of the file.

### Examples
```lua
fs.rename("/path/to/old_file.txt", "/path/to/new_file.txt")
```

---

`fs.remove(path)`
-----------------

Removes a file or directory.

### Parameters
- `path` (fs.path or string): The path of the file or directory to remove.

### Examples
```lua
fs.remove("/path/to/file.txt")
```

---

`fs.list(path, recurse)`
-------------------------

Lists files and directories in the specified path.

### Parameters
- `path` (fs.path or string): The path of the directory.
- `recurse` (boolean, optional): Whether to recurse into subdirectories. Defaults to `false`.

### Returns
- `string[]`: A list of files and directories.

### Examples
```lua
local files = fs.list("/path/to/directory")
for _, file in ipairs(files) do
    print(file)
end
```