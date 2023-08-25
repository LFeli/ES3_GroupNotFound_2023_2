import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

export function App() {
  const { register, handleSubmit } = useForm();
  const[output, setOutput] = useState('')
  
  const onSubmit = (data: any) => {
    // console.log('Dados do formulário:', data);
    setOutput(JSON.stringify(data, null, 2))

  };

  return (
    <div className="grid grid-cols-2 h-screen w-full font-raleway">
      {/* Left  side*/}
      <div className='flex flex-col justify-center overflow-y-auto w-full max-w-[480px] mx-auto'>
        <h1 className="font-bold text-[28px] text-zinc-950 mb-4">Seja bem vindo!</h1>
        <span className='text-base'>Faça o login e acesse todo o nosso conteúdo.</span>

        {/* <div className='mt-16 flex flex-col gap-10'>
          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsGoogle />

            Entrar usando a conta do Google
          </button>

          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsFacebook />

            Entrar usando a conta do Facebook
          </button>
        </div> */}


        <form 
          onSubmit={handleSubmit(onSubmit)}
          className='pt-8'
        >
          <div className='grid gap-8'>
            <div className='flex gap-3 flex-col'>
              <label htmlFor="email" className='text-lg font-medium'>E-mail</label>
              <input type="text" 
                {...register('email')}
                placeholder='Seu e-mail'
                className='p-5 rounded-2xl   border-2 border-[#B4B2B0] text-[#212121] font-semibold transition-colors placeholder:text-[#776F67]/75 hover:border-[#7092BF] hover:bg-[#F2F2F2]/90 '
              />
            </div>

            <div className='flex gap-3 flex-col'>
              <div className='flex items-center justify-between'>
                <label htmlFor="password" className='text-lg font-medium'>Senha</label>

                <a href="#" className='text-lg font-semibold text-[#546e8f] hover:text-[#273343] transition-colors hidden'>Esqueceu a senha?</a>
              </div>
              <input type="password" 
                {...register('password')}
                placeholder='Seu e-mail'
                className='p-5 rounded-2xl border-2 border-[#B4B2B0] text-[#212121] font-semibold transition-colors placeholder:text-[#776F67]/75 hover:border-[#7092BF] hover:bg-[#F2F2F2]/90 '
              />
            </div>
          </div>

          
        
        <button type="submit" className='h-16 w-full rounded-2xl bg-[#7092BF] font-semibold text-[#F2F2F2] mt-14 hover:bg-[#6583ac] transition-colors'>Login</button>
      </form>

      <span className='text-[#212121] text-center mt-10'>Não tem conta? <a href="#" className='font-semibold underline text-[#7092BF] hover:text-[#546e8f] transition-colors'>Inscreva-se</a></span>

      <pre>{output}</pre>

      <footer className='flex items-center justify-center'>
        <span className='text-sm absolute bottom-4'>Oh my dog 2023</span>
      </footer>
      </div>

      {/* Right side*/}
      <div>
        {/* Logo */}
        <img src="logo.svg" alt="" className="absolute z-10 right-8 top-8"/>

        {/* Image for right side */}
        <img src="doguito.jpg" alt="" className="h-screen w-full object-cover relative" />
      </div>
    </div>
  )
}