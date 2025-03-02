"use client"
import { useFormStatus } from "react-dom";

export default function PostButton() {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            Create Post
        </button>
    );
}