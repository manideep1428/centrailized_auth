import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import { Progress } from '@/components/ui/progress';

interface PasswordStrengthMeterProps {
  password: string;
}

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const [strength, setStrength] = useState(0);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setStrength((result.score / 4) * 100);
      setLabel(getLabel(result.score));
    } else {
      setStrength(0);
      setLabel('');
    }
  }, [password]);

  const getLabel = (score: number) => {
    switch (score) {
      case 0:
        return 'Very weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const getColor = () => {
    if (strength <= 25) return 'bg-red-500';
    if (strength <= 50) return 'bg-orange-500';
    if (strength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-1">
      <Progress value={strength} className={`h-1 w-full ${getColor()}`} />
      {label && (
        <p className="text-xs text-muted-foreground">
          Password strength: <span className="font-medium">{label}</span>
        </p>
      )}
    </div>
  );
}

