
export default function Alert({ message }) {
    return (
        <div role="alert" className="alert alert-error">
            <span className="text-white font-lg">{message}</span>
        </div>
    )
}
