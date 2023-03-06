#include <stdio.h>
#include <stdlib.h>

void calculateNotes(long long moneyAmount, int c);

int main()
{
    int numTestCases;
    long long moneyAmount;
    int c;

    printf("Nhap so luong test case: ");
    scanf("%d", &numTestCases);

    for (int i = 1; i <= numTestCases; i++)
    {
        printf("Nhap tien can rut va cua c (test case %d): ", i);
        scanf("%lld %d", &moneyAmount, &c);

        // ... đoạn code xử lý test case ở đây ...
        calculateNotes(moneyAmount, c);
    }

    return 0;
}

void calculateNotes(long long moneyAmount, int c)
{
    const long long amount = moneyAmount;
    long long denominations[] = {1000, 2000, 3000, 5000};

    for (int j = 1; j <= c; j++)
    {
        const long long denomination = denominations[j - 1] * 10;
        denominations[4 + (j - 1) * 2] = denomination * 2 - denomination / 2;
        denominations[4 + (j - 1) * 2 + 1] = denomination * 5 - denomination;
    }

    int numDenominations = 4 + c * 2;
    for (int i = 0; i < numDenominations - 1; i++)
    {
        for (int j = i + 1; j < numDenominations; j++)
        {
            if (denominations[i] < denominations[j])
            {
                const long long temp = denominations[i];
                denominations[i] = denominations[j];
                denominations[j] = temp;
            }
        }
    }

    long long noteCount = 0;
    long long totalAmount = 0;

    for (int j = 0; j < numDenominations; j++)
    {
        const long long noteDenomination = denominations[j];
        const long long noteCountToAdd = (amount - totalAmount) / noteDenomination;
        noteCount += noteCountToAdd;
        totalAmount += noteDenomination * noteCountToAdd;
        if (totalAmount == amount)
            break;
    }

    if (totalAmount == amount)
    {
        printf("%lld %d\n", noteCount, c);
    }
    else
    {
        printf("0 %d\n", c);
    }
}
