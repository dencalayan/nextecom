import AdminNav from "@/Components/nav/AdminNav"

export default function AdminDashboard({children}) {
    return (
        <>
            <AdminNav />
            {children}
        </>
    )
}