import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
    return (
        <div>
            <p>Home</p>
            <SignedOut>
                <SignInButton />
            </SignedOut>

            <UserButton />
        </div>
    )
}

export default Home