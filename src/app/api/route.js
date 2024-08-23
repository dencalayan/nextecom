import { NextResponse } from "next/server";

export function GET(req) {
    return NextResponse.json({ time: new Date().toLocaleString() });

}



//iEukOSaHNovSnJfJ
//mongodb+srv://tekoverkofi:iEukOSaHNovSnJfJ@cluster0.wgifx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0