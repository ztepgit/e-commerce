"use client";

import { Suspense } from "react";
import CartContent from "./CartContent"; // เราจะสร้างไฟล์นี้ไว้ใส่ logic ของ cart

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}
