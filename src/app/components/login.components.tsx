import { FC, useCallback, useState } from "react";

const LoginComponent: FC <{setLogin: (value: string) => void }> = (props) => {

        const {setLogin} = props
        const [username, setUsername] = useState("")
        const submit = useCallback( () => {
                setLogin(username)
        }, [username])
        
        return (
                <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                        <div className="bg-white p-8 rounded shadow-md">
                                <h2 className="text-2xl font-bold mb-4 text-gray-700 flex justify-center items-center">Login</h2>
                                <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                Username
                                </label>
                                <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                onChange={(event) => setUsername(event.target.value)}
                                />
                                </div>
                                <button
                                onClick={submit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                >
                                Login
                                </button>
                        </div>
                </div>
        )
}

export default LoginComponent