
export default function Page() {

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Thank you for verifying your email
                    </h2>
                    <p>You are now verified!</p><br/>
                    <p>You can log into your account and get started with adding your information and products!</p>
                </div>
            </div>
        </div>
    );
}
