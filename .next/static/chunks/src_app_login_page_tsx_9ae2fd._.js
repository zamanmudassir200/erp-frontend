(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_login_page_tsx_9ae2fd._.js", {

"[project]/src/app/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// "use client";
// import { RxEyeClosed } from "react-icons/rx";
// import Link from "next/link";
// import { useState } from "react";
// import useSWRMutation from "swr/mutation";
// import { useRouter } from "next/navigation"; // For redirection
// import { loginClient, loginAdmin, loginEmployee } from "@/services/authService"; // Import login functions
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { toast } from "react-toastify"; // Toast notification
// import { TfiEye } from "react-icons/tfi";
// export default function LoginPage() {
//   const [formData, setFormData] = useState<{ username: string; password: string }>({
//     username: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
//   const [role, setRole] = useState("client"); // Default role
//   const router = useRouter();
//   // Function to handle login based on role
//   const loginFunction = async (credentials: { username: string; password: string }) => {
//     if (role === "client") {
//       return loginClient(credentials);
//     } else if (role === "admin") {
//       return loginAdmin(credentials);
//     } else if (role === "employee") {
//       // Fetch employee data (including the role) during login
//       const employeeData = await loginEmployee(credentials);
//       return employeeData; // This should contain role information, like "Hr" in your case
//     }
//   };
//   // Login mutation
//   const {
//     trigger: login,
//     isMutating: isLoading,
//     error,
//   } = useSWRMutation('login', async (_, { arg }) => {
//     try {
//       const data = await loginFunction(arg);
//       if (data.token) {
//         localStorage.setItem("token", data.token); // Store token
//       }
//       console.log("DATA",data)
//       // Check if the user is an employee and has a role
//       if (role === "employee") {
//         toast.success("Login successful! Redirecting to employee dashboard");
//         router.push(`employee/${data.employee.role.toLowerCase()}/dashboard`); // Redirect based on the employee's role
//       } else {
//         toast.success("Login successful! Redirecting to dashboard");
//         router.push(`${role}/dashboard`); // For admin or client login
//       }
//       return data;
//     } catch (err) {
//       toast.error("Login failed. Please try again.");
//       throw err; // This will trigger the error handling in SWRMutation
//     }
//   });
//   // Handle form change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   // Handle form submit with validation
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Check if username and password are filled
//     if (!formData.username || !formData.password) {
//       toast.error("Please fill out all required fields.");
//       return;
//     }
//     // Proceed to login if all fields are filled
//     login(formData);
//   };
//   return (
//     <div className="flex items-center bg-gray-300 justify-center min-h-screen px-5">
//       <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-xl">
//         {/* Tabs section */}
//         <div className="flex justify-around mb-6">
//           <button
//             onClick={() => setRole("admin")}
//             className={`py-2 px-4 rounded ${role === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             Admin
//           </button>
//           <button
//             onClick={() => setRole("client")}
//             className={`py-2 px-4 rounded ${role === "client" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             Client
//           </button>
//           <button
//             onClick={() => setRole("employee")}
//             className={`py-2 px-4 rounded ${role === "employee" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//           >
//             Employee
//           </button>
//         </div>
//         <h1 className="text-3xl font-bold mb-4 text-center">
//           Login
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <Input
//             name="username"
//             type="text"
//             placeholder={`Username`}
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           <div className="relative">
//             <Input
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3 flex items-center"
//             >
//               {showPassword ? <TfiEye /> : <RxEyeClosed />}
//             </button>
//           </div>
//           <Button type="submit" disabled={isLoading} className="w-full">
//             {isLoading ? "Logging in..." : "Login"}
//           </Button>
//           <div className="text-end">
//             <Link className="text-sm text-blue-600 underline hover:unset" href="/forgotPassword">
//               Forgot Password
//             </Link>
//           </div>
//           {role === "client" && (
//             <p className="text-center mt-4">
//               Don't have an account?{" "}
//               <a href="/register" className="text-blue-600 underline hover:text-blue-800">
//                 Sign up
//               </a>
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
// Import necessary modules
__turbopack_esm__({
    "default": (()=>LoginForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@shadcn/ui'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../services/loginService'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function LoginForm() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        try {
            const response = await loginService({
                name,
                password
            });
            if (response.success) {
                // Check the user's role and redirect accordingly
                if (response.user.role === 'admin') {
                    router.push('/dashboard/admin');
                } else if (response.user.role === 'employee_hr') {
                    router.push('/dashboard/employee-hr');
                } else {
                    router.push('/dashboard/user');
                }
            }
        } catch (err) {
            setError('Invalid login credentials');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "login-form max-w-md mx-auto mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleLogin,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    type: "text",
                    value: name,
                    onChange: (e)=>setName(e.target.value),
                    placeholder: "Username",
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                    type: "password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    placeholder: "Password",
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 217,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    type: "submit",
                    className: "w-full bg-blue-500 text-white",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/login/page.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/login/page.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "15N5u+ZQy8PyY0XbkeG0Oz3x9NY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_refresh__.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_login_page_tsx_9ae2fd._.js.map