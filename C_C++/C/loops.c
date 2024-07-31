#include <stdio.h>

int main()
{

  // for (int i = 0; i < 10; i++)
  // {
  //   printf("%d \n", i);
  // }

  int i = 0;
  while (i < 10)
  {
    printf("%d \n", i % 2);

    i++;
  }

  return 0;
}