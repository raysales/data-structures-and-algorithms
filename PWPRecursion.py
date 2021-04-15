def power( base, exp ):
  result = 1
  for num in range(exp):
      result *= base
  return result

def power2( base, power ):
  result = 1
  for num in range( power ):
    result = result * base
  return result

def power3( base, power ):
  result = 1
  count = 0
  while count < power:
    result *= base
    count += 1
  return result

def power_rec( base, exp ):
  if( exp == 1 ):
      return( base )
  if(exp!=1):
      return( base * power( base, exp - 1 ) )

print( power( 2, 3 ) )

print( power2( 2, 4 ) )

print( power_rec( 2, 5 ) )

def print_my_name( name, n ):
  if n == 0: return

  print( name )
  print_my_name( name, n - 1)

print( print_my_name( 'Ray', 4 ))


def recur_factorial(n):
  if n == 1:
      return n
  else:
      return n*recur_factorial(n-1)

print( recur_factorial( 4 ) )

print( recur_factorial( 5 ) )


def recur_fibo(n):
  if n <= 1:
      return n
  else:
      return( recur_fibo( n-1 ) + recur_fibo( n-2 ) )


def fib_top_down(n, memo):
  
  # Base case
  if n == 0 or n == 1 :
    memo[n] = n

  # If the value is not calculated previously then calculate it
  if memo[n] is None:
    memo[n] = fib_top_down(n-1 , memo)  + fib_top_down(n-2 , memo) 

  # return the value corresponding to that value of n
  return memo[n]

# A memoized solution
def fib_2(n, memo):
  if memo[n] is not None:
    return memo[n]
  if n == 1 or n == 2:
    result = 1
  else:
    result = fib_2(n-1, memo) + fib_2(n-2, memo)
  memo[n] = result
  return result

def fib_memo(n):
    memo = [None] * (n + 1)
    return fib_2(n, memo)

def Fib(n):
  memo={1:1,2:1}
  f=0
  for i in range(3,n+1):
    memo[i]=memo[i-1]+memo[i-2]


  f=memo[n]
  print(f)
  return f

  def fib_bottom_up(n):
    if n == 1 or n == 2:
        return 1
    bottom_up = [None] * (n+1)
    bottom_up[1] = 1
    bottom_up[2] = 1
    for i in range(3, n+1):
        bottom_up[i] = bottom_up[i-1] + bottom_up[i-2]
    return bottom_up[n]

def fib(n):
  a, b = 0, 1
  for i in range(n):
    a, b = b, a + b

  return a

def fib_const_space(n):
  a,b = 0,1
  for _ in range(n):
    a, b = b, a+b
  return a 

print( recur_fibo( 10 ) )
print( fib( 10 ) )


def fib(i):
  if i <= 2:
    return 1;
  else:
    f = fib(i-1) + fib(i-2)
    print('calc', i)
  return f
print(fib(6))


def fibMemo(i):
  if i in memo:
    return memo[i]
  if i <= 2:
    return 1;
  else:
    f = fibMemo(i-1) + fibMemo(i-2)
    memo[i] = f
  print('calc', i,  memo)
  return f
memo = {}
print(fibMemo(6))


def fibBottom(i):
  fib = {}
  for k in range(i+1):
    if k <= 2: f = 1
    else:
      f = fib[k - 1] + fib[k - 2]
      print('calc', k , fib)
    fib[k] = f
  return fib[i]
print(fibBottom(6))
