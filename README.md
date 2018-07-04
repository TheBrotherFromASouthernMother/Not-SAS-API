# Not-SAS-API
The unofficial API for the world's best study abroad program ⛴🌊🌍 🇿🇦🇨🇳🇮🇳🇲🇦🇬🇧🇬🇭🇻🇳

## In Progress: Expect Great Changes Soon


## Key Technologies
 * HTML
 * CSS
 * Bootstrap
 * JavaScript
 * Node.js
 * Express.js
 * PostgreSQL
 * Pg-Promise
 
 ## Usage:
 ### Get a single voyage by id
  * URL: semester-at-sea.me/api/voyages/id
  * Example: semester-at-sea.me/ap/voyages/2
 
 ```{"status":"success", 
"data": { 
"id":2, 
"semester":"Summer",
"year":2012, 
"tagline":"North Africa & Europe", 
"ports_of_call":9, 
"ship_id":5,
"academic_sponsor":4 
} , 
"message":"retreived voyage"}
```

### Get a voyage by semester and year
  * URL: semester-at-sea.me/api/voyages/:semester&:year
  * Example: semester-at-sea.me/ap/voyages/spring&2016
  
  ```{"status":"success",
  "data":{ "id":12,
  "semester":"Spring","year": 2016,
  "tagline":"A Voyage Around the World","ports_of_call":15,
  "ship_id":6,"academic_sponsor":4},
  "message":"retreived voyage"}
  ```
  
