import ButtonVerification from "@/ui/buttons/ButtonVerification";

export default function Page({ params }: { params: { token: string } }) {
    const id = params.token;

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Please click the button below to verify your email
                    </h2>
                    <ButtonVerification token={id}/>
                </div>
            </div>
        </div>
    );
}
