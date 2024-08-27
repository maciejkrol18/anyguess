import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="bg-card p-8 rounded-md flex flex-col gap-4">
        <h1 className="text-2xl font-medium">Welcome to anyguess</h1>
        <p className="text-muted">Sign in to continue</p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/home" });
          }}
        >
          <Button type="submit" variant={"primary"}>
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}

// export default function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn("google", { redirectTo: "/home" });
//       }}
//     >
//       <button type="submit">Signin with Google</button>
//     </form>
//   );
// }
