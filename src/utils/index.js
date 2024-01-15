import { v4 as uuid } from "uuid";
export const generateUserId=()=>{
        const unique_id = uuid();
        // Get first 8 characters using slice
        const userId = unique_id.slice(0, 8);
        return userId
}

