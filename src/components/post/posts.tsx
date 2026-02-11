'use client'

import {CoursePost} from "@/types/Post";
import {useState} from "react";
import Post from "@/components/post/post";

export default function Posts({coursePosts, courseId} : {coursePosts: Array<CoursePost>, courseId: number }) {
    const [filter, setFilter] = useState("ALL");

    const filteredCoursePosts = coursePosts.filter(post => {
        if (filter === "ALL") {
            return true;
        } else if (filter === "HOMEWORK") {
            return post.type === "HOMEWORK";
        } else {
            return post.type === "ANNOUNCEMENT";
        }
    });

    return (
        <>
            <div className="w-fit h-fit flex my-3">
                <button className={`px-5 py-2 rounded-lg border-gray-300 border mr-3
                ${filter === "ALL" ? "bg-primary_green text-white font-semibold" : "bg-white"}
                `} onClick={()=>{setFilter("ALL")}}>All</button>
                <button className={`px-5 py-2 rounded-lg border-gray-300 border mr-3
                ${filter === "HOMEWORK" ? "bg-primary_green text-white font-semibold" : "bg-white"}
                `} onClick={()=>{setFilter("HOMEWORK")}}>Homeworks</button>
                <button className={`px-5 py-2 rounded-lg border-gray-300 border mr-3
                ${filter === "ANNOUNCEMENT" ? "bg-primary_green text-white font-semibold" : "bg-white"}
                `} onClick={()=>{setFilter("ANNOUNCEMENT")}}>Announcements</button>
            </div>
            {filteredCoursePosts.map((post) => (
                <Post key={post.id} data={post} courseId={courseId} located="course"/>
            ))}
        </>
    )
}