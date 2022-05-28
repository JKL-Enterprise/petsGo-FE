import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('should handle onClick', () => {
        const onClick = jest.fn();
        const { getByRole, rerender } = render(
            <Button name="Klik" onClick={onClick}/>,
        );

        getByRole('button', { name: /Klik/i }).click();
        expect(onClick).toHaveBeenCalled();

        rerender(
            <Button name="Klik" onClick={onClick} disabled/>
        );

        getByRole('button', { name: /Klik/i }).click();
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
