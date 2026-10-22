export default function ContactItem({ icon, label, value }) {
  return <div className="flex items-center gap-5"><div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25">{icon}</div><div><p className="font-bold text-gray-900">{label}</p><p className="text-gray-500 text-sm">{value}</p></div></div>
}
