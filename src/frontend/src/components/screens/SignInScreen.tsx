import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { AlertCircle, LogIn, LogOut, User } from 'lucide-react';

export function SignInScreen() {
  const { login, clear, loginStatus, identity, isLoggingIn, isLoginError, loginError } = useInternetIdentity();

  const isSignedIn = identity && !identity.getPrincipal().isAnonymous();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            {isSignedIn 
              ? 'You are currently signed in' 
              : 'Sign in to access your account'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoginError && loginError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {loginError.message || 'An error occurred during sign in. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          {isSignedIn ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">Principal ID</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {identity.getPrincipal().toString()}
                  </p>
                </div>
              </div>
              <Button 
                onClick={clear} 
                variant="outline" 
                className="w-full"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button 
              onClick={login} 
              disabled={isLoggingIn}
              className="w-full"
            >
              <LogIn className="mr-2 h-4 w-4" />
              {isLoggingIn ? 'Signing in...' : 'Sign in with Internet Identity'}
            </Button>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              window.location.hash = '';
            }}
          >
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
