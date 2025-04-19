import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'

// Server action for sign in
async function handleSignIn() {
	'use server'
	await signIn('github')
}

// Server action for sign out
async function handleSignOut() {
	'use server'
	await signOut()
}

const Navbar = async () => {
	const session = await auth()

	return (
		<div className='px-5 py-3 bg-white shadow-sm body'>
			<nav className='flex justify-between items-center'>
				<Link href='/'>
					<Image
						className='rounded-full'
						src='/logo.svg'
						alt='logo'
						width={70}
						height={30}
					/>
				</Link>
				<div className='flex items-center gap-5 text-white'>
					{session && session.user ? (
						<>
							<Link href='/blog/create'>
								<span>Create</span>
							</Link>
							<form action={handleSignOut}>
								<button type='submit'>Log out</button>
							</form>
							<Link href={`/user/${session.user.id}`}>
								<span>{session.user.name}</span>
							</Link>
						</>
					) : (
						<form action={handleSignIn}>
							<button type='submit'>Log in</button>
						</form>
					)}
				</div>
			</nav>
		</div>
	)
}

export default Navbar
