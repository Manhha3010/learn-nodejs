#include <stdio.h>

int Test1(int count)
{
    char ch;
    printf("Tesst gia tri co phai a hay k \n");
    scanf("%c", &ch);
    if (ch == 'a')
    {
        scanf("%c", &ch);
        while ((ch == 'b') || (ch == 'c'))
        {
            count++;
            printf("Lo da nhay vao case b c \n");

            scanf("%c", &ch);
        }
        if (ch == 'x')
        {
            printf("Lo da nhay vao case x \n");
            return 1;
        }

        else
        {
            printf("Lo deo nhay vao case x \n");
            return 0;
        }
    }
}
int main()
{
    int count = 0;
    printf("lo da tra ve gia tri %d", Test1(count));
    return 0;
}