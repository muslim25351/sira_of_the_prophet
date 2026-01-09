import { Ionicons } from "@expo/vector-icons";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-[#0f1f17]">
      <StatusBar barStyle="light-content" />

      {/* ================= HEADER ================= */}
      <View className="flex-row items-center px-4 py-4">
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text className="text-white text-lg font-semibold ml-4">Settings</Text>
      </View>

      {/* ================= APPEARANCE ================= */}
      <Text className="text-gray-400 text-xs px-4 mt-4 mb-2 tracking-widest">
        APPEARANCE
      </Text>

      <View className="mx-4 bg-[#132b1e] rounded-xl">
        {/* Light Mode */}
        <SettingRow
          icon="sunny"
          iconColor="#f59e0b"
          label="Light Mode"
          selected={false}
        />

        {/* Dark Mode */}
        <SettingRow
          icon="moon"
          iconColor="#60a5fa"
          label="Dark Mode"
          selected
        />

        {/* System */}
        <SettingRow
          icon="phone-portrait"
          iconColor="#9ca3af"
          label="System Default"
          selected={false}
        />
      </View>

      {/* ================= PLAYBACK ================= */}
      <Text className="text-gray-400 text-xs px-4 mt-6 mb-2 tracking-widest">
        PLAYBACK
      </Text>

      <View className="mx-4 bg-[#132b1e] rounded-xl px-4 py-4">
        <View className="flex-row items-center mb-4">
          <Ionicons name="speedometer" size={20} color="#22c55e" />
          <Text className="text-white ml-3 font-medium">Default Speed</Text>
        </View>

        <View className="flex-row bg-[#0f1f17] rounded-full p-1 justify-between">
          {["1.0x", "1.25x", "1.5x", "2.0x"].map((speed) => (
            <View
              key={speed}
              className={`flex-1 py-2 rounded-full mx-1 ${
                speed === "1.25x" ? "bg-green-500" : "bg-transparent"
              }`}
            >
              <Text
                className={`text-center text-xs ${
                  speed === "1.25x"
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {speed}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* ================= LANGUAGE ================= */}
      <Text className="text-gray-400 text-xs px-4 mt-6 mb-2 tracking-widest">
        LANGUAGE
      </Text>

      <View className="mx-4 bg-[#132b1e] rounded-xl">
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
          <View className="flex-row items-center">
            <Ionicons name="language" size={20} color="#60a5fa" />
            <Text className="text-white ml-3">App Language</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-gray-400 mr-2">English</Text>
            <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
          </View>
        </TouchableOpacity>
      </View>

      {/* ================= SUPPORT ================= */}
      <Text className="text-gray-400 text-xs px-4 mt-6 mb-2 tracking-widest">
        SUPPORT
      </Text>

      <View className="mx-4 bg-[#132b1e] rounded-xl">
        <SupportRow icon="star" color="#facc15" label="Rate the App" />

        <SupportRow icon="share-social" color="#ec4899" label="Share App" />
      </View>

      {/* ================= FOOTER ================= */}
      <View className="items-center mt-10">
        <Ionicons name="book" size={24} color="#22c55e" />
        <Text className="text-gray-500 text-xs mt-2">
          Sirah Audio v1.0.2 (Build 240)
        </Text>
      </View>
    </View>
  );
}

/* ================= REUSABLE ROWS ================= */

function SettingRow({
  icon,
  iconColor,
  label,
  selected,
}: {
  icon: any;
  iconColor: string;
  label: string;
  selected: boolean;
}) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-b border-[#1f3a2a] last:border-b-0">
      <View className="flex-row items-center">
        <Ionicons name={icon} size={20} color={iconColor} />
        <Text className="text-white ml-3">{label}</Text>
      </View>

      <View
        className={`w-4 h-4 rounded-full border ${
          selected ? "bg-green-500 border-green-500" : "border-gray-500"
        }`}
      />
    </TouchableOpacity>
  );
}

function SupportRow({
  icon,
  color,
  label,
}: {
  icon: any;
  color: string;
  label: string;
}) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-b border-[#1f3a2a] last:border-b-0">
      <View className="flex-row items-center">
        <Ionicons name={icon} size={20} color={color} />
        <Text className="text-white ml-3">{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
    </TouchableOpacity>
  );
}
