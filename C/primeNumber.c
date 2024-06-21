#include <stdio.h>

int main()
{

  int findPrime = 13;
  int i = 2;
  int isPrime = 1;

  while (i < findPrime)
  {
    if (findPrime % i == 0)
    {
      isPrime = 0;
    }

    i++;
  }

  if (isPrime == 1)
  {
    printf("It is Prime");
  }
  else
  {
    printf("Not Prime");
  }

  return 0;
}