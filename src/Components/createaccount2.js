function CreateAccount(){
  const ctx = React.useContext(UserContext);  

  function handle(data){
    ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
    return true;
  }

  return (
    <BankForm
      bgcolor="primary"
      header="Create Account 2"
      handle={handle}
      hideAmount={true}
      successButton="Add antoher account :)"
    />
  )
}