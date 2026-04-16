import { SUPPLIERS } from "@/lib/mock-data/suppliers";
import EditSupplierClient from "@/components/suppliers/edit/EditSupplierClient";

interface EditSupplierPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSupplierPage({
  params,
}: EditSupplierPageProps) {
  const { id } = await params;
  const supplier = SUPPLIERS.find((s) => s.id === id) ?? null;

  if (!supplier) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-text-secondary">Supplier not found.</p>
      </div>
    );
  }

  return <EditSupplierClient supplier={supplier} />;
}
