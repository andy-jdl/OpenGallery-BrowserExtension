import { Asset } from "./Asset";

export interface Favorite {
    asset: Asset
}

// Problem, every asset comes with an id, the problem is adding the same id to favorites. 
// So this error is okay but you need a better way to handle gracefully
// 2025/09/14 12:00:26 C:/Users/andyj/Desktop/plugin-project/backend-db/core/database/fav.go:12 ERROR: duplicate key value violates unique constraint "favorites_pkey" (SQLSTATE 23505)
// [23.124ms] [rows:0] INSERT INTO "favorites" ("created_at","updated_at","deleted_at","title","artist_name","image_url","location","id") VALUES ('2025-09-11 07:53:27.939','2025-09-11 07:53:27.939',NULL,'Smiley face','unknown','https://upload.wikimedia.org/wikipedia/commons/2/2a/Child_Art_Aged_2.5_Smiley_Face_with_Writing_Underneath.png','unknown',3) RETURNING "id"
// [GIN] 2025/09/14 - 12:00:26 | 500 |     66.4073ms |       127.0.0.1 | POST     "/favorites"