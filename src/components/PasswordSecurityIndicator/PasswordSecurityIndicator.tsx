import React from 'react';
import { Text, View } from 'react-native';
import { ValueValidationResult } from 'fluentvalidation-ts/dist/ValueValidationResult';
import { styles } from './PasswordSecurityIndicator.styles';

interface PasswordSecurityIndicatorProps {
  showPasswordRequirement:
    | ValueValidationResult<string | undefined>
    | undefined;
}

// const passwordRequirements = [
//   'Entre 8 y 20 caracteres',
//   'Al menos 1 número',
//   'Al menos 1 caracter especial',
//   'Al menos 1 letra mayúscula',
//   'Al menos 1 letra minúscula',
// ];

export const PasswordSecurityIndicator = ({
  showPasswordRequirement,
}: PasswordSecurityIndicatorProps) => {
  return (
    <View>
      {showPasswordRequirement ? (
        <Text style={styles.passwordRequirementTitle}>
          {showPasswordRequirement}
        </Text>
      ) : null}
      {/* {passwordRequirements.map(requirement => {
        return (
          <View style={styles.passwordRequirementListContainer}>
            <FontAwesomeIcon
              // icon={faCheckCircle}
              icon={faCircleDot}
              size={14}
              style={styles.noCheck}
            />
            <Text style={styles.passwordRequirementList}>
              {requirement}
            </Text>
          </View>
        );
      })} */}
    </View>
  );
};
