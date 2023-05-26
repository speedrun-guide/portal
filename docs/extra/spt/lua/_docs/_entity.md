## `entity.from_id(id)`

Creates an entity instance from an entity index.

### Parameters
- `id` (number): Entity index.

### Returns
- `entity` (Entity instance): The created entity instance.

### Example
```lua
local ent = entity.from_id(123)
```

---

## `entity.from_hammer_id(hammer_id)`

Creates an entity instance from an entity hammer ID.

### Parameters
- `hammer_id` (number): Entity hammer ID.

### Returns
- `entity` (Entity instance): The created entity instance.

### Example
```lua
local ent = entity.from_hammer_id(456)
```

---

## `entity.list(filter)`

Returns a list of all entities.

### Parameters
- `filter` (function|nil|string): Filter function, a string class name, or `nil` to not filter.

### Overloads
- `entity.list()`
    - Returns all entities.

- `entity.list(filter)`
    - `filter` (function): Filter function that takes an entity instance as a parameter and returns a boolean.

### Returns
- `entity[]` (List of entities): List of all entities that match the filter.

### Example
```lua
local allEntities = entity.list()

local function filterFunc(entity)
    return entity:get_class_name() == "prop_physics"
end

local physicsEntities = entity.list(filterFunc)
```

---

## `entity.closest(filter)`

Returns the closest entity based on a filter.

### Parameters
- `filter` (function|string|nil): Filter function, a string class name, or `nil` to not filter.

### Overloads
- `entity.closest()`
    - Returns the closest entity without any filtering.

- `entity.closest(filter)`
    - `filter` (function): Filter function that takes an entity instance as a parameter and returns a boolean.
    - `filter` (string): Class name of the entity to filter.

### Returns
- `entity?` (Entity instance): The closest entity that matches the filter, or `nil` if none is found.

### Example
```lua
local closestEntity = entity.closest()

local function filterFunc(entity)
    return entity:get_class_name() == "npc_zombie"
end

local closestZombie = entity.closest(filterFunc)

local closestProp = entity.closest("prop_physics")
```

---

## `entity:get_id()`

Returns the entity ID.

### Returns
- `number` (Entity ID): The entity ID.

### Example
```lua
local id = ent:get_id()
```

---

## `entity:get_hammer_id()`

Returns the entity hammer ID.

### Returns
- `number` (Entity hammer ID): The entity hammer ID.

### Example
```lua
local hammerID = ent:get_hammer_id()
```

---

## `entity:get_name()`

Returns the entity name.

### Returns
- `string?` (Entity name): The entity name, or `nil` if the entity does not have a name.

### Example
```lua
local name = ent:get_name()
```

---

## `entity:get_model_name()`

Returns the entity model name.

### Returns
- `string?` (Entity model name): The entity model name, or `nil` if the entity does not have a model name.

### Example
```lua
local modelName = ent:get_model_name()
```

---

## `entity:get_class_name()`

Returns the entity class name.

### Returns
- `string` (Entity class name): The entity class name.

### Example
```lua
local className = ent:get_class_name()
```

---

## `entity:get_internal_class_name()`

Returns the entity internal class name

.

### Returns
- `string` (Entity internal class name): The entity internal class name, or what the C++ code would know it as.

### Example
```lua
local internalClassName = ent:get_internal_class_name()
```

---

## `entity:get_pos()`

Returns the entity position.

### Returns
- `vec3` (Entity position): The entity position.

### Example
```lua
local pos = ent:get_pos()
```

---

## `entity:set_pos(pos)`

Sets the entity position.

### Parameters
- `pos` (vec3): The entity position to set.

### Example
```lua
ent:set_pos(vec3(10, 20, 30))
```

---

## `entity:get_rot()`

Returns the entity rotation.

### Returns
- `vec3` (Entity rotation): The entity rotation.

### Example
```lua
local rot = ent:get_rot()
```

---

## `entity:set_rot(rot)`

Sets the entity rotation.

### Parameters
- `rot` (vec3): The entity rotation to set.

### Example
```lua
ent:set_rot(vec3(0, 90, 0))
```

---

## `entity:get_vel()`

Returns the entity velocity.

### Returns
- `vec3` (Entity velocity): The entity velocity.

### Example
```lua
local vel = ent:get_vel()
```

---

## `entity:set_vel(vel)`

Sets the entity velocity.

### Parameters
- `vel` (vec3): The entity velocity to set.

### Example
```lua
ent:set_vel(vec3(0, 0, 10))
```