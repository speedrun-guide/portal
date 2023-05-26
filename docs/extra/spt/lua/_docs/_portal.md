## `portal.list()`

Returns a list of all portals.

### Returns
- `portal[]` (Portals): A list of all portals.

### Example
```lua
local portals = portal.list()
for _, p in ipairs(portals) do
    console.msg("Portal: %s", p:get_entity():get_name())
end
```

---

## `portal.closest()`

Returns the closest portal.

### Returns
- `portal?` (Closest portal): The closest portal, or `nil` if there isn't one.

### Example
```lua
local closestPortal = portal.closest()
if closestPortal then
    console.msg("Closest Portal: %s", closestPortal:get_entity():get_name())
end
```

---

## `portal.from_entity(entity)`

Returns the portal linked to the specified entity.

### Parameters
- `entity` (entity): The portal's entity.

### Returns
- `portal?` (Linked portal): The portal linked to this entity, or `nil` if it's not a portal.

### Example
```lua
local entity = entity.from_id(123)
local linkedPortal = portal.from_entity(entity)
if linkedPortal then
    console.msg("Linked Portal: %s", linkedPortal:get_entity():get_name())
end
```

---

## `portal.from_id(entity_id)`

Returns the portal linked to the entity with the specified ID.

### Parameters
- `entity_id` (number): The portal's entity ID.

### Returns
- `portal?` (Linked portal): The portal linked to the entity with this ID, or `nil` if it doesn't exist or isn't a portal.

### Example
```lua
local linkedPortal = portal.from_id(456)
if linkedPortal then
    console.msg("Linked Portal: %s", linkedPortal:get_entity():get_name())
end
```

---

## `portal.blue()`

Returns the blue portal.

### Returns
- `portal?` (Blue portal): The blue portal. If there are multiple blue portals, it returns the first one found.

### Example
```lua
local bluePortal = portal.blue()
if bluePortal then
    console.msg("Blue Portal: %s", bluePortal:get_entity():get_name())
end
```

---

## `portal.orange()`

Returns the orange portal.

### Returns
- `portal?` (Orange portal): The orange portal. If there are multiple orange portals, it returns the first one found.

### Example
```lua
local orangePortal = portal.orange()
if orangePortal then
    console.msg("Orange Portal: %s", orangePortal:get_entity():get_name())
end
```

---

## `portal:get_linkage_id()`

Returns the linkage ID of the portal.

### Returns
- `number` (Linkage ID): The portal's linkage ID.

### Example
```lua
local linkageID = portal:get_linkage_id()
console.msg("Linkage ID: %d", linkageID)
```

---

## `portal:get_linked()`

Returns the linked portal of the portal.

### Returns
- `portal?` (Linked portal): The portal's linked portal.

### Example
```lua
local linkedPortal = portal:get_linked()
if linkedPortal then
    console.msg("Linked Portal: %s", linkedPortal:get_entity():get_name())
end
```

---

## `portal:get_matrix()`

Returns the transformation matrix of the portal.

### Returns
- `mat4?` (Transformation matrix): The portal's transformation matrix, or `nil` if the portal isn't linked.

### Example
```lua
local matrix = portal:get_matrix()
if matrix then
    console.msg("Transformation Matrix: %s", tostring(matrix

))
end
```

---

## `portal:is_active()`

Checks if the portal is active.

### Returns
- `boolean` (Is active): `true` if the portal is active, `false` otherwise.

### Example
```lua
local isActive = portal:is_active()
console.msg("Is Active: %s", tostring(isActive))
```

---

## `portal:is_orange()`

Checks if the portal is orange.

### Returns
- `boolean` (Is orange): `true` if the portal is orange, `false` otherwise.

### Example
```lua
local isOrange = portal:is_orange()
console.msg("Is Orange: %s", tostring(isOrange))
```

---

## `portal:is_blue()`

Checks if the portal is blue.

### Returns
- `boolean` (Is blue): `true` if the portal is blue, `false` otherwise.

### Example
```lua
local isBlue = portal:is_blue()
console.msg("Is Blue: %s", tostring(isBlue))
```

---

## `portal:get_entity()`

Returns the entity of the portal.

### Returns
- `entity` (Portal entity): The portal's entity.

### Example
```lua
local entity = portal:get_entity()
console.msg("Portal Entity: %s", entity:get_name())
```