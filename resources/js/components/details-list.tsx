export default function DetailsList({ heading, value }: { heading: string; value: string }) {
    return (
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">{heading}</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{value}</dd>
        </div>
    );
}
