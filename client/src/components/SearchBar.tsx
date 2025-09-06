"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // ทำ debounce เพื่อไม่ให้ router.push บ่อยเกินไป
  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmed = query.trim();
      if (trimmed) {
        router.push(`/?q=${encodeURIComponent(trimmed)}`);
      } else {
        router.push("/"); // ถ้าลบ search ออกให้กลับไปหน้า default
      }
    }, 300); // รอ 300ms หลังพิมพ์เสร็จค่อย push (กันกระตุก)

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="text-sm outline-0"
      />
    </div>
  );
};

export default SearchBar;
