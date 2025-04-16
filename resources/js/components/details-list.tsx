export default function DetailsList({ heading, value }: { heading: string; value: string }) {
    return (
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium">{heading}</dt>
            <dd className="sm:col-span-2">{value}</dd>
        </div>
    );
}
